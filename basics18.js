//  With the bind() method, an object can borrow a method from another object.

    const myProfile = {
        myName : 'Riya',
        myId : 22,
        myAccounts : 2,
        myTask : 'Collections management',
        getMyInfo : function(){
            console.log(`
            The first Name is ${this.myName}.
            The Id number is ${this.myId}.
            The number of account: ${this.myAccounts}.
            The task is: ${this.myTask}.
            `)
        }
    }

    myProfile.getMyInfo();

    const xyzProfile = {
        myName : 'Shebi',
        myId : 18,
        myAccounts : 3,
        myTask : 'Tourist management'
    }

    // Borrowing the getMyInfo method. :) 
    myProfile.getMyInfo.bind(xyzProfile)();
    myProfile.getMyInfo.call(xyzProfile);

