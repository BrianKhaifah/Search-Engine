import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { Repo } from '../repo'
import { UserService } from '../user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Users:User
  Repo : Repo [] = []

  constructor( public usserHttpService:UserService) { }

  ngOnInit(): void {
    this.searchGit ("")

  }
  searchGit ( searchTerm: string ) {
    this.usserHttpService.searchGits ( searchTerm ).then (
       (success ) => {
         this.Users = this.usserHttpService.Users
       },

        (errors ) => {
          console.log ( errors)
        })

        this.usserHttpService.searchRepos ( searchTerm ).then (

          ( success ) => {

            this.Repo = this.usserHttpService.Repo
          } )
  }

}
