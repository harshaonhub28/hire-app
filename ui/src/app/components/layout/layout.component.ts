import { Component, OnInit } from "@angular/core";
//import { AuthService } from '../../services/auth.service';
import { environment } from "../../../environments/environment";
import { Router, NavigationEnd, RouterStateSnapshot } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  projectName = "Hire app";
  constructor() {}

  ngOnInit() {}
}
