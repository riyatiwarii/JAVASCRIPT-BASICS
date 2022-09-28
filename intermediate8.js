//  Class Inheritance
//  Adding extends to a class enables the subclass to inherit all the parent class methods.
//  Calling the super() method in the constructor method, we call the parent's constructor method and
//  gets access to the parent's properties and methods.

    class Pet {
        constructor(petname){
            this.pet = petname;
        }
        callPetname(){
            return 'The name of my pet is '+ this.pet
        }
    }
    
    class AboutPet extends Pet{
        constructor(petname, petbreed){
            super(petname);
            this.breed = petbreed;
        }
        callPetbreed(){
            console.log(this.callPetname() +' & its breed is '+ this.breed)
        }
    }
    myPet = new AboutPet("Miley", "Huskey");
    myPet.callPetbreed()


