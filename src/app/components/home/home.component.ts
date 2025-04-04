import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService)
  deveMostrarTitulo = true
  name = "Juca"
  listItems = ["Juca", "Duda", "Belms"]
  
  @Input("name") minhaPropsDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<string>()

  submit(){
    this.emitindoValorName.emit(this.name)
    this.enviaFormularioService.enviaInformacaoParaBackend("Enviando formacao")
  }

}
