[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

-Submit detailed answers to the following in this file via a pull request:
-
--   A wireframe of what your game project will look like.
--   The data structure you plan to use.
--   How you will take the markup of the game board and represent it in JS
--   How you plan to approach this project.
--   4-8 user stories for your game project.
--   How you plan to keep your code modular.
--   What creative spin will you add to your project?
--   How will you use version control to backup / track your project?
--   What additional features will you build if you have extra time?
+A wireframe of what your game project will look like.
+
+**data structure**
+The playing area (or board) is divided up into square cells. I will refer to a cell by its row and column. 0, 0 will be the point of origin and be in the upper-left corner of the board &  2, 2 will be the lower-right corner. I will name positions using an array. Each click will be collected and logged as either a move by X or O
+
+**How you will take the markup of the game board and represent it in JS?**
+Game Play
+1. the game will begin with player_x
+2. then swap back and forth between player_x and player_o until a winning array has been reached
+3. the winner with the winning array is announced. 
+4. if there is a tie, a tie will be announced. 
+5. at that point, a new button appears where you can clear the board and begin a new game.
+
+// define the constants and data structures that are used to represent the state of the game.
+
+Constants:
+User
+
+player_X
+player_O
+
+Object Constructors:
+an object constructor function to build new users 
+an object constructor function to initilize the board
+
+Fuctions:
+a function to fill the board with either an X or an O
+a function that checks for winning arrays
+a function to switch between player_x and player_o
+
+**How you plan to approach this project**
+with fear. and hopefully a good plan.
+
+**user stories**
+collecting user information (new and returning)
+playing the game
+announcing Winner
+a button to enter a new game
+
+
+**modular code plan**
+A file layout system that is modular. 
+
+**creative spin**
+I will use moon imagery and feature a very clean and responsive design
+I would like to use alpha channels to mimic overprinting, as if you were playing the game with markers in a notebook
+
+
+**project tracking & version control back up plan**
+I will use git hub to back up my progress. I will break off different branches for the different sections, like for example when I work on the "announcing winner" feature, I will break off a branch for that, and once I have made the additions, I will merge it back with master
+
+**dream additional features**
+I would like to add button where you can play the game without logging in, 
+If you do go through the process of logging in, you sign up for my mailing list & perhaps get access to even more advanced functionaily


# browser-template

A template for starting front-end projects. Webpack for `require` system, build
pipeline, and development server. Boostrap and Handlebars.js included. No
front-end frameworks included.

## Installation

1. [Download](../../archive/master.zip) this template.
1. Move to the `wdi/projects` directory, then unzip the template directory with
    `unzip /Users/<user-name>/Downloads/browser-template-master.zip`.
1. Rename the template directory from `browser-template-master` to
    `<project-name>-client`.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace all instances of `ga-wdi-boston.browser-template` with the name of
    your project.
1. Move into the new project and `git init`.
1. Add all of the files in your project with the command `git add --all`.
      - **Note: This is the only time you should run this command!**
1. Commit all of your files with the command `git commit`.
      - Your commit title should read `Initial commit`.
1. Install dependencies with `npm install`.
1. Create a new repository on [github.com](https://github.com),
    _not GitHub Enterprise_.
1. Name the new repository with the same name used on Step 3.

## Structure

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/index.js`](assets/scripts/index.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should set `apiUrls.production` and `apiUrls.development` in
[`config/environment.js`](config/environment.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss). Bootstrap version 3 is
included in this template.

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

To deploy a browser-template based SPA, run `grunt deploy`.

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt test`: runs any automated tests, depends on `grunt build`
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
