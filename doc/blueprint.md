FORMAT: 1A

# The Simplest API
This is one of the simplest APIs written in the **API Blueprint**. 
One plain resource combined with a method and that's it! We will explain what is going on in the next installment - [Resource and Actions](2.%20Resource%20and%20Actions.md).

**Note:** As we progress through the examples, do not also forget to view the [Raw](https://raw.github.com/apiaryio/api-blueprint/master/examples/1.%20Simplest%20API.md) code to see what is really going on in the API Blueprint, as opposed to just seeing the output of the Github Markdown parser. 

Also please keep in mind that every single example in this course is a **real API Blueprint** and as such you can **parse** it with the [API Blueprint parser](https://github.com/apiaryio/snowcrash) or one of its [bindings](https://github.com/apiaryio/snowcrash#bindings).

# Group User
User-related resources of *The Simplest API*.

## User [/users/{id}]
A single User object.

The User resource has the following attributes: 

- id

The states *id* is assigned by the API at the moment of creation. 

+ Parameters 
    + id = `2` (optional, string) ... Id of a Post
    
+ Model (application/json; charset=utf-8)

    + Body

            {
                "id": 2
            }

### Retrieve a Single User [GET]
+ Response 200
    
    [User][]