## Problems to Solve

#### Images in Options
The options in the `QuestionArea.svelte` componet sometimes load images. The image tags are present in the json files that are recieved from the server so we cant modify them. But the images that are retured are all of diffrent sizes so we need to take care of that 

Solution: Made all the image tags inside of the `.option-image-container` of height 25svh so that they have a similar height and correct aspect ratio 

#### Make responsive for Tablets
Need to lower the font size when shifting to tablet. Look into how I can change the default size of the text when I hit those breakpoints
Solution: made responsive by setting up break point on the html tag

#### Loading the Question Paper First
The first thing that happens when the site is loadded is that the question paper is fetched from the static area. But during that time most of the components cant recieve their values so its very important that the question is loaded first and then all the components 
For this I have to write an `if(question){}` condition for all functionalities
