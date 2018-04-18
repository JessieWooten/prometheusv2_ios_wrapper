//
//  ViewController.swift
//  Prometheus
//
//  Created by Jessie Wooten on 2/13/18.
//  Copyright © 2018 NewsCart. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController, WKScriptMessageHandler {

    @IBOutlet weak var webView: WKWebView!
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        super.viewDidLoad()
        let contentController = self.webView.configuration.userContentController
        let userScript = WKUserScript(
            source: "window.app={viewArticle:function(a){webkit.messageHandlers.viewArticle.postMessage(a)}};",
            injectionTime: WKUserScriptInjectionTime.atDocumentEnd,
            forMainFrameOnly: true
        )
        contentController.addUserScript(userScript)
        contentController.add(self, name: "viewArticle")
        
        let config = WKWebViewConfiguration()
        config.userContentController = contentController
        loadHTMLFromBundle()
        self.webView.scrollView.bounces=false;
    }
    
    func loadHTMLFromBundle() {
        let url = Bundle.main.url( forResource: "index", withExtension: "html", subdirectory: "dist")
        let urlRequest:URLRequest = URLRequest(url: url!)
        self.webView.load(urlRequest)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if(message.name == "viewArticle") {
            print("view article received: \(message.body)")
            let url = message.body
            let strUrl =  String(describing: url)
            UIApplication.shared.open(URL(string: strUrl)!)
            
        }else{
            print("ERROR: .js Message didn't fit case: ", message.name)
        }
    }

}

