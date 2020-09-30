# Custom Logs File generatior for LOGS HUB Nodejs

### Avaliable functions 
We have 5 types of logs:
 - warning
 - error
 - critical
 - info

### Function Paramters
For each function we have five paramaters three of them are required and the others are optional
 - message (*)
 - level (*)
 - application (*)
 - user_id
 - extra_data

### env file
The file contains the path of logs file and code for each level

### Examples

- warning("MESSAGE","NEWS",3,{"key":"value"});
- error("MESSAGE","NEWS",3);
- info("MESSAGE","NEWS");
- critical("MESSAGE","NEWS",null,{"key":"value"});


License
----
Odai Atef
**Free to use**
