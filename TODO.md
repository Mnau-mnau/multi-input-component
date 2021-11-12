# Multi input homework

task info here:
https://www.figma.com/file/bdJPYoWMyciy8RqIRpnCAh/DS-Team-Task?node-id=0%3A1

## Where to start? :white_check_mark:

- git repo
- create react app with typescript

## Create a component :white_check_mark:

- collect inputs in the state
- state has an array of inputs
- state has one active text field
- on keypress 'Enter' adds text field to the array

## Add remove functions :x:

- remove onClick 'X' any of the inputs in pillboxes :white_check_mark:
- remove onClick all inputs :white_check_mark:
- remove on ~~keypress~~ keyup delete if input is empty last item from the list :white_check_mark:
- use keyup - it catches all keys compared to keypress

## Separate styled components

- separate close icon :white_check_mark:
- styled close icon components :white_check_mark:
- separate pillbox
- separate input
- separate button

## How do you want to manage the styles?

- so far just separate styles for each file
- add general styles to separate folder and import them?

## Manage focus

- focus style on the parent div
- autofocus on text input
- tab focus on close icons in pillboxes and general remove button  

## Add some tests