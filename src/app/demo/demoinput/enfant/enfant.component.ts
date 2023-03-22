import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {
  @Input() valeur! : string
  @Input() truc! : number
  @Input() nom! : string

  @Output() envoiEvent : EventEmitter<string> = new EventEmitter<string>()
  @Output() supprimerEvent : EventEmitter<boolean> = new EventEmitter<boolean>()
  monTexte! : string

  envoi() {
    this.envoiEvent.emit(this.monTexte)
  }

  supprimer(reponse : boolean) {
    this.supprimerEvent.emit(reponse)
  }
}
