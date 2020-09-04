# vuejs_02_events_methods

# In Javascript
can add onclick listener to listen to click events

# In vuejs
1. use directives, which is an instruction we place in our template, in the part of the DOM, we control through the instance
---
2. vuejs recognizes this instruction/ the directive and knows what to do with it

# v- (vuejs attribute), on (name of the directive)
1. on is a build in directive, used for listening to events
2. we have to pass an argument to this directive, by adding a : 
3. this argument is the name of the event we want to listen
4. shorter version of v-on @click instead of v-on:click
5. specify which code to execute, whenever this event we are listening to occurs

# methods property of vue instance
1. methods object - stores all the methods, this vuejs instance knows
2. all the methods we want to trigger from the template , have to be stored in the methods object