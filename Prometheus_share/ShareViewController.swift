//
//  ShareViewController.swift
//  Prometheus_share
//
//  Created by Jessie Wooten on 3/24/18.
//  Copyright © 2018 NewsCart. All rights reserved.
//

import UIKit
import Social
import MobileCoreServices

class ShareViewController: SLComposeServiceViewController {
    var docPath = ""

    override func isContentValid() -> Bool {
        // Do validation of contentText and/or NSExtensionContext attachments here
        return true
    }
    override func viewDidLoad() {
        print("WE IN HERE")
        
        let containerURL = FileManager().containerURL(forSecurityApplicationGroupIdentifier: "co.Newscart.Prometheus")!
        docPath = "\(containerURL.path)/share"
        
        //  Create directory if not exists
        do {
            try FileManager.default.createDirectory(atPath: docPath, withIntermediateDirectories: true, attributes: nil)
        } catch let error as NSError {
            print("Could not create the directory \(error)")
        } catch {
            fatalError()
        }
        
        //  removing previous stored files
        let files = try! FileManager.default.contentsOfDirectory(atPath: docPath)
        for file in files {
            try? FileManager.default.removeItem(at: URL(fileURLWithPath: "\(docPath)/\(file)"))
        }
        
        let extensionItem = extensionContext?.inputItems.first as! NSExtensionItem
        let itemProvider = extensionItem.attachments?.first as! NSItemProvider
        let propertyList = String(kUTTypePropertyList)
        if itemProvider.hasItemConformingToTypeIdentifier(propertyList) {
            itemProvider.loadItem(forTypeIdentifier: propertyList, options: nil, completionHandler: { (item, error) -> Void in
                guard let dictionary = item as? NSDictionary else { return }
                OperationQueue.main.addOperation {
                    if let results = dictionary[NSExtensionJavaScriptPreprocessingResultsKey] as? NSDictionary,
                        let urlString = results["URL"] as? String,
                        let url = NSURL(string: urlString) {
                        print("URL retrieved: \(urlString)")
                        let config = URLSessionConfiguration.default
                        let session = URLSession(configuration: config)
                        let url = URL(string: "YOUR URL STRING")!
                        let task = session.dataTask(with: url) { (data, response, error) in
                            if error != nil {
                                print(error!.localizedDescription)
                            } else {
                                print(data,"\n",response) // JSON Serialization
                            }
                        }
                        task.resume()
                    }
                }
            })
        } else {
            print("error")
        }
    }

    override func didSelectPost() {
        // This is called after the user selects Post. Do the upload of contentText and/or NSExtensionContext attachments.
    
        // Inform the host that we're done, so it un-blocks its UI. Note: Alternatively you could call super's -didSelectPost, which will similarly complete the extension context.
        
        self.extensionContext!.completeRequest(returningItems: [], completionHandler: nil)
    }

    override func configurationItems() -> [Any]! {
        // To add configuration options via table cells at the bottom of the sheet, return an array of SLComposeSheetConfigurationItem here.
        return []
    }
    
    override func viewDidAppear(_ animated: Bool) {
        
        let alertView = UIAlertController(title: "Export", message: " ", preferredStyle: .alert)
        
        self.present(alertView, animated: true, completion: {
            
            let group = DispatchGroup()
            
            NSLog("inputItems: \(self.extensionContext!.inputItems.count)")
            
            for item: Any in self.extensionContext!.inputItems {
                
                let inputItem = item as! NSExtensionItem
                
                for provider: Any in inputItem.attachments! {
                    
                    let itemProvider = provider as! NSItemProvider
                    group.enter()
                    itemProvider.loadItem(forTypeIdentifier: kUTTypeData as String, options: nil) { data, error in
                        if error == nil {
                            //  Note: "data" may be another type (e.g. Data or UIImage). Casting to URL may fail. Better use switch-statement for other types.
                            //  "screenshot-tool" from iOS11 will give you an UIImage here
                            let url = data as! URL
                            let path = "\(self.docPath)/\(url.pathComponents.last ?? "")"
                            print(">>> sharepath: \(String(describing: url.path))")
                            
                            try? FileManager.default.copyItem(at: url, to: URL(fileURLWithPath: path))
                            
                        } else {
                            NSLog("\(error)")
                        }
                        group.leave()
                    }
                }
            }
            
            group.notify(queue: DispatchQueue.main) {
                NSLog("done")
                
                let files = try! FileManager.default.contentsOfDirectory(atPath: self.docPath)
                
                NSLog("directory: \(files)")
                
                //  Serialize filenames, call openURL:
                do {
                    let jsonData : Data = try JSONSerialization.data(
                        withJSONObject: [
                            "action" : "incoming-files"
                        ],
                        options: JSONSerialization.WritingOptions.init(rawValue: 0))
                    let jsonString = (NSString(data: jsonData, encoding: String.Encoding.utf8.rawValue)! as String).addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed)
                    let result = self.openURL(URL(string: "myapp://com.myapp.share?\(jsonString!)")!)
                } catch {
                    alertView.message = "Error: \(error.localizedDescription)"
                }
                self.dismiss(animated: false) {
                    self.extensionContext!.completeRequest(returningItems: [], completionHandler: nil)
                }
            }
        })
    }
    
    @objc func openURL(_ url: URL) -> Bool {
        var responder: UIResponder? = self
        while responder != nil {
            if let application = responder as? UIApplication {
                return application.perform(#selector(openURL(_:)), with: url) != nil
            }
            responder = responder?.next
        }
        return false
    }

}
