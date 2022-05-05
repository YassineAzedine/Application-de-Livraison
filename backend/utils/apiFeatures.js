class APIFeatures {
    constructor(query,querystr){
        this.query = query;
        this.querystr = querystr
    }


    filter(){
        
        const queryCopy = {...this.querystr};
        //Removing fields from the query

        this.query =this.query.find(queryCopy);
        return this;
    }  
    // pagination(resPerPage){
    //     const currentPage = Number(this.querystr.page)|| 1 ; 
    //     const skip =  resPerPage *currentPage(currentPage - 1)
    //     this.query = this.query.limit(resPerPage).skip(skip);
    //     return this;

    // } 

}
module.exports = APIFeatures