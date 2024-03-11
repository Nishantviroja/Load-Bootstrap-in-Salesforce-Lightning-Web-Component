# Integrating Bootstrap into Salesforce Lightning Web Component (LWC)

This repository contains a code snippet demonstrating how to integrate Bootstrap into a Salesforce Lightning Web Component (LWC) for enhanced styling and functionality. 

## Overview

This code snippet utilizes the Salesforce platformResourceLoader to import Bootstrap and jQuery resources, ensuring compatibility with the Salesforce platform. It dynamically loads Bootstrap and jQuery assets in the LWC's renderedCallback method.

## Usage

1. Copy the `loadBootstrapInLWC.js` file into your LWC project directory.
2. Ensure that you have Bootstrap and jQuery resources available in your Salesforce org, and update the `@salesforce/resourceUrl/bootstrap` and `@salesforce/resourceUrl/jquery` accordingly in the code.
3. Import the `loadBootstrapInLWC.js` file into your LWC component where you want to use Bootstrap styles and components.
4. Ensure that you have specified the correct path to the Bootstrap and jQuery resources in the `loadScript` and `loadStyle` methods.
5. After implementing the code, Bootstrap styles and components will be available for use within your Lightning Web Component.

For detailed instructions, refer to the comments within the `loadBootstrapInLWC.js` file.

This Gist demonstrates how to integrate Bootstrap into a Salesforce Lightning Web Component (LWC) for enhanced styling and functionality. It utilizes the Salesforce platformResourceLoader to import Bootstrap and jQuery resources, ensuring compatibility with the Salesforce platform. The code snippet dynamically loads Bootstrap and jQuery assets in the LWC's renderedCallback method. This tutorial is useful for Salesforce developers looking to enhance their LWCs with Bootstrap styles and components.

## File Details

- **File Name:** `loadBootstrapInLWC.js`
- **Bootstrap Version:** 5.2.3
- **Syntax Highlighting:** JavaScript

## Author

Nishant Viroja [(nishantviroja.me)](https://nishantviroja.me/)
