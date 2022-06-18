import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { CardService } from "@app-services/card.service";

import { UberComponent } from "./components/principal/uber.component";
import { CardComponent } from "./components/card/card.component";



@NgModule({
  declarations: [UberComponent, CardComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [UberComponent],
  providers: [CardService]
})
export class UberModule {}