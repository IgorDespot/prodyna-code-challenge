# Prodyna Code Challenge

This project is made as part of an interview for Javascript developer position in Prodyna, it is being built using Angular 2+ providing a graphical interface for features required by the task.
Using this interface, the user can do several operations:
* Get all post from external API in case of this project https://jsonplaceholder.typicode.com/ was used as the provider.
* Remove any post or expand its body for more information.
* Infinitive scroll is also implemented without using external libraries.
* Create post
* Spinner is added for service calls.

### Content
* [Technology Description](#technology-description)
* [Project](#project)
  * [Structure](#structure)
  * [Solutions](#solutions)
  * [Issues](#issues)
* [Production](#production)
  
## Technology Description

**`Angular`** was used due to its typed nature, combined with a huge set of already provided libraries which give solid structure and make it very easy for people to understand. **`React`** was no an option for this task due to its "wild nature" since it would be hard to present structure and decisions used in the development of this task. Angular is also a great choice for large teams since changing from one Angular project to another can be a less painful process that changing React projects due it's nature.

**`Bootstrap`** was used for styling and general look of this project.


## Project

#### Stucture

Structure of project is being split into folders each representing certian functionality, those folders are:
* entities
  * post
    * **`post.model.ts`**
    * **`post.service.ts`**
* home
* navbar
* pages
  * about
  * posts
    * **`post-edit`**
* util
  * error-page
  * pipes
  * **`routing.module.ts`**
  * **`util.module.ts`**
  
##### Entities folder
In entities folder we have post folder witch containes services and model related to post, in case of some other components being added
it would store their models and their services.
<br>
<br>
**post.model.ts** Simple post model
<br>
**post.service.ts** Service implementation for post with following options:
  * Get all posts
  * Delete post
  * Create post
##### Home folder
Represents home component. This page could easy be stored in pages folder but home component can store more logic than it is at this project and for that reasoning it have its own foder.

##### Navbar folder
Represent navigation component, combined with **`Angular Router`** it main task is as name suggest is navigation.

##### Pages folder
Pages folder is storing components but in more strucutred way, these components are specific to its own functionalities and are being separated and put in this folder fo easy way of adding more components in future. It have two of them **`about`** and **`post`** component.
These components could be put in root of app but that would not be good solution in long term as it would be hard to manage as number of them would increese.

##### Util folder
Util folder containes logic or component that can be used in any part of project an are not related to certian specific aspects. Hrere I created pipe used for **` search filter`** and **`error-page`** component used when user mistake route.


#### Solutions
1. List all the posts, every post should be and expandable.
* Here basic service is used which is called in **`onInit`** method and will fetch and populate this data to be shown to the user. Logic to hide and show posts is being implemented using a simple function to toggle content by changing visibility.
2. Implement keyword search.
* This was implemented using pipe, logic is simple it check if anything was typed in the search bar and if true it uses the filter on an array of posts checking if title exists in an array and showing only data in an array that match criteria.
3. Create a form for adding post to list with basic validation.
* Form for this is created and contains validation with a clear visual representation. 
4. Remove posts.
* This is implemented by taking an index of the post and then slicing it since we do not have proper API to use this dynamically. Delete is also visible instantly.
5. Implement loading spinner
* For this external library is used ngx-spinner more info on this link: https://www.npmjs.com/package/ngx-spinner, it is shown when loading posts but due to the speed of connection that can be very short.
6. Infinitive scroll
* This was implemented using **`HostListener`** witch created event **`scroll`** that was called once we started scrolling on div taking and calculating its heigth and once we come to bottom of div then service is called and 20 more entities are being added etc...


#### Issues

When filtering post delete of post is not working, this is due to logic implemented because when filtering posts array positions change and that is causing this problem due to lack of time and job responsibilities this would be removed before sending it to review.

When creating new Post **posted`** is being generated as a random number between 100 - 200 because we initially have 100 posts, didn't implement a system to prevent double posted from happening.

To simulate post adding I should have used cross-component communication and event emitting just for purpose of showing but decided to split them for better visual representation if proper API used there would be no issues with my approach.

Documentation this code have no proper documentation, i made trade with implementing core features over documentation due to lack of time.


#### Production

This code is not production ready, it lacks monitoring and proper logging some of these aspects are not met from my side due to the time limit but also to my experience with some of its aspects.


Thanks for this opportunity it was a pleasure to practice skills while also learning new things.

LinkedIn: https://www.linkedin.com/in/despotigor/



