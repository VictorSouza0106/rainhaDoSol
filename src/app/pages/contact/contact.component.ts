import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WindowService } from 'src/app/sevices/window.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public form: FormGroup;
  public http: HttpClient;

  constructor(
    private formBuilder: FormBuilder,
    private windowService: WindowService,
    protected injector: Injector
  ) {
    this.http = injector.get(HttpClient);
  }

  isMobile: boolean = window.screen.width < this.windowService.MOBILE_WIDTH;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null],
      email: [null, Validators.email],
      content: [null],
    });
  }

  public onSubmit() {
    console.log('SENDING', this.http);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .post(
        'https://formspree.io/f/mbjnlqjo',
        {
          name: 'TESTE NAME',
          replyto: 'TESTE EMAIL',
          message: 'TEXT MESSAGE COOL',
        },
        { headers: headers }
      )
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
