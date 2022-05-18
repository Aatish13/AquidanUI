import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  getImages(){
    let imageArray = ["../../assets/images/Aquidan_Dripirrigation_1.jpeg", 
    "../../assets/images/Aquidan_Dripirrigation_2.jpeg",
    "../../assets/images/Aquidan_Filter_GI_FRP.png",
    "../../assets/images/Aquidan_Filter_GI.png",
    "../../assets/images/Aquidan_Dripirrigation_1.jpeg",
    "../../assets/images/Aquidan_Dripirrigation_1.jpeg",
    "../../assets/images/Aquidan_Dripirrigation_1.jpeg",
    "../../assets/images/Aquidan_Dripirrigation_1.jpeg"];
    return imageArray;
  }
}
