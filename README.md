[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e5f765da6ec142a18fd5f4382bfb4dbb)](https://app.codacy.com/gh/BuildForSDGCohort2/Team-038-Frontend?utm_source=github.com&utm_medium=referral&utm_content=BuildForSDGCohort2/Team-038-Frontend&utm_campaign=Badge_Grade_Settings)

# Repify V1.0
Official Version 1.0 web application for Repify beneficial app

****************
Team: 038-A
****************

A guide on how to use the repo!
you can contact @Realice or @Majeed Shuaib for help

Please before you push your codes to the repository make sure you pull from the main repository (), so the changes that have been made can be reflected on your local machine, for us to avoid merge conflicts use the git command line
   
    git pull upstream Devlop

## Developers guide

This process here should be able to guide you on how to contribute effectively to this project, follow the steps below. You should not be new to the git workflow process however if you still are, the guide should still be able to help you through the process.

## Develop is the default branch

    * Fork the repository to generate a copy of your own. Please fork.

    * Clone the repository.

        ```
            git clone (the repository link)
        ```
        
    * Make your the main repo the remote upstream 
        ```
            git remote add upstream https://github.com/BuildForSDGCohort2/Team-038-Frontend.git
        ```
    * swich to your branch 

        ```
        git checkout (name-of-branch)
        ```
    * run npm install tp install all dependencies, libraries and tools the project needs installed, from the package.json file.

        ```
        npm install
        ```

    After changes have been made do:
        ```
        git pull upstream develop
        ```
    Consistently pull from the upstream to avoid not getting your pull request merged and to avoid conflicts.
    This way you can resolve conflicts from your local computer even before pushing always check what branch you are on when making changes
    
    * Make your changes, add them and make your commits

        ``` 
        git add .
        git commit -m "your message"
        ```
    Write good commit messages, this is very important, so that other teamates reviewing would know what your code is doing.

    * Push your codes to your forked repository, make sure you are pushing to your branch please
        
        ```
            git push origin (name-of-branch)
        ```
    Make your Pull request from that branch of your repo to the branch of this repo and wait for it to be merged.

Write good commit messages, this is very important, so people reviewing can know what your fix, feature e.t.c. is doing
Your PR should carry good story. 
if you are going to make changes to an existing code, state why you are doing so in the commit messages

it is not just about the code, user workflow matters too!!

### Code with Love