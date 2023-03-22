import { Component } from '@angular/core';

@Component({
  selector: 'app-demoinput',
  templateUrl: './demoinput.component.html',
  styleUrls: ['./demoinput.component.scss']
})
export class DemoinputComponent {
  maValeur : string = "salut !!!"

  monTableau : string[] = [
    "Arthur", "Perceval", "Leodagan", "Merlin"
  ]

  selectedName! : string

  donneeRecueDeEnfant! : string

  transmet(nom : string) {
    this.selectedName = nom
  }

  reception(texte : string) {
    this.donneeRecueDeEnfant = texte
  }

  supprimer(reponse : boolean) {
    if(reponse) {
      let index = this.monTableau.findIndex(x => x == this.selectedName)
      this.monTableau.splice(index, 1)
    }
    else alert("Va chier")
  }
}
