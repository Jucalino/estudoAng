import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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

  submit(){
    this.enviaFormularioService.enviaInformacaoParaBackend("Enviando formacao")
  }
}
