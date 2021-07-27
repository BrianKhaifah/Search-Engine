import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { Repo } from '../repo'
import { UserService } from '../user.service';@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  Users:User
  Repos : Repo [] = []

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

            this.Repos = this.usserHttpService.Repos
          } )
  }

}
