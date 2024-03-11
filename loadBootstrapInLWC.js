// Gist Name: Load Bootstrap in Salesforce Lightning Web Component
// Description: This Gist demonstrates how to integrate Bootstrap into a Salesforce Lightning Web Component (LWC) for enhanced styling and functionality. It utilizes the Salesforce platformResourceLoader to import Bootstrap and jQuery resources, ensuring compatibility with the Salesforce platform. The code snippet dynamically loads Bootstrap and jQuery assets in the LWC's renderedCallback method.

// File Name: loadBootstrapInLWC.js
// Bootstrap Version: 5.2.3
// Syntax Highlighting: JavaScript

// Author: Nishant Viroja ( https://nishantviroja.me/ )

import { LightningElement } from 'lwc';
import bootstrap from '@salesforce/resourceUrl/bootstrap';
import jquery from '@salesforce/resourceUrl/jquery';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class LoadBootstrapInLWC extends LightningElement {
    renderedCallback() {
        Promise.all([
            loadScript(this, bootstrap + '/bootstrap-5.2.3-dist/js/bootstrap.js'),
            loadScript(this, jquery),
            loadStyle(this, bootstrap + '/bootstrap-5.2.3-dist/css/bootstrap.css')
        ])
        .then(() => {
            console.log("Bootstrap and jQuery scripts, along with Bootstrap CSS, have been successfully loaded. You can now implement Bootstrap components and styles within your Lightning Web Component.");
        })
        .catch(error => {
            console.error("Failed to load Bootstrap and jQuery scripts:", error);
        });
    }  
}