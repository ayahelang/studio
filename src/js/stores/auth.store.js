class AuthStore{

user=null;

setUser(user){

this.user=user;

}

getUser(){

return this.user;

}

clear(){

this.user=null;

}

}

export default new AuthStore();
