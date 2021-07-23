import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user'
import { Repo } from './repo'

@Injectable({

  providedIn: 'root'

})
export class UserService {

  Users:User
  Repo : Repo [] = []

  constructor( private http:HttpClient ) {

    searchGits ( searchTerm: String)

    interface userInterface {

      public name: string,
      public login: string,
      public avator_url: any,
      public followers: any,
      public following: any,
      public location: any

    }

    let urlUser = "Https://api.github.com/users/"+ searchTerm;

    let promise = new Promise ( ( resolve,reject ) => {

      this.http.get < userInterface > ( urlUser ).toPromise ().then(

        (results) => {

          this.Users = result

          console.log (this.Users);

          resolve ( result)

        },
        (error) => {

          console.log()

          reject()

        }
      )
    })

    return promise

  }

  searchRepos ( searchTerm : string ) {

  interface repoInterface {

    name : string,
    description ; string,
    html_url : any,
    created_at:Date

  }

  let urlUser = "Https://api.github.com/users/" +searchTerm + "/repos"

  let promise = new Promise ( ( reolve , reject ) => {

    this.http.get < repoInterface [] > ( urlUser ).toPromise ().then (

      ( results ) => {

        this.Repo = [] ;

        for ( let i=0 ; i < results.lenght; i ++ ) {
          let repo = new Repo ( results [ i ].name,results [ i ], description , results [ i ].html_url, results [ i ].create)
          this.repo.push ( repo ) ;
        }

        console.log( results )
        resolve ( results )

      },
       ( error ) => {
        console.log ()

        reject ()
      }
    )
  })
   return promise
}
}
