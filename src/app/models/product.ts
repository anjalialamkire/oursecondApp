
export interface ITable{
    empId :number
    empName:string
    designation:string
    department:string
    salary:number
    isPermanent: boolean
     email:string 
     contact: number
}

export interface Istudent{
          rollNo:number
          name:string
          course :string
          year:string
          percentage:number
          isPassed:boolean
          email:string
           contact: number
}

export interface Iproduct{
    prodId:number
     prodName:string 
     category:string 
     price: number 
     stock: number 
     isAvailable: boolean
      brand:string
}

export interface Icourse{
 courseId: number
  courseName: string
 duration: string 
  fees: number
  mode: string
  isActive:boolean
 trainer: string
}

export interface Ibook{
     bookId: number
    title: string
    author: string
    price:number
     pages: number
     isAvailable: boolean
     genre:string
}

export interface Icustomer{


 custId: number
  name: string
  city: string
  age: number
  email:string
 isPrime: boolean
  contact: number
}

export interface Iorder{
        orderId:number
        customerName:string
        product:string
        amount: number
        status: string
        date: string
}

export interface Imovie{
    movieId: number
    title: string
     genre: string
     rating:number
    releaseYear: number
     isHit: boolean
      language: string
}

export interface Iteacher{
       teacherId: number
       name: string
       subject:string
        experience: number
        salary:number
        isFullTime:boolean
        email: string
}