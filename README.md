class components are the older ways to create components in React. not used nowadays that much in new projects
- when i am loading a functional component that means that that component is being loaded into the page.
- when i am loading this class based component that means i am creating  a new instance of class. and constructor is called which receive props and creates state variables 
- we create state variable using this.state (state is reserved keyword.) (never update state variables DIRECTLY)
this.setState() in class based components jus like we have setFunction in functional components.
- when class based component is loaded, a new instance is created for that class and firstly , Constructor() is called and after that render() method is called. 