import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-admin-panel",
  templateUrl: "./admin-panel.component.html",
  styleUrls: ["./admin-panel.component.css"]
})
export class AdminPanelComponent implements OnInit {
  selected: boolean;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.selected = false;
  }
}
