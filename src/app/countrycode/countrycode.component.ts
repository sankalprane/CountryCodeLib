import { Component, OnInit, Output, Input, ViewChild, EventEmitter, forwardRef  } from '@angular/core';
import { NgForm, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Helper } from './helper';

@Component({
  selector: 'app-countrycode',
  templateUrl: './countrycode.component.html',
  styleUrls: ['./countrycode.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountrycodeComponent),
      multi: true
    }
  ]
})
export class CountrycodeComponent implements OnInit, ControlValueAccessor {

  coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }

  @ViewChild('Form') Form: NgForm;
  
  // @Output() numberWithCode = new EventEmitter<string>();

  _disabled: boolean;

  countryList = Helper.countryList;

  @Input() get disabled() { return this._disabled; }
  set disabled(value: any) { this._disabled = this.coerceBooleanProperty(value); }

  @Input() get initCountry() { return this.countryCode; }
  set initCountry(value: any) {
    if (!this.coerceBooleanProperty(value)) {
      return;
    }
    this.countryList.forEach(country => {
      if (value == country.code) {
        this.countryCode = country.dial_code;
        return;
      }
    });
 }

  number = '';

  constructor() { }

  ngOnInit(): void {
  }

  // finalAns() {
  //   this.numberWithCode.emit(this.countryCode + this.number);
  // }

  countryCode = '+91';
  value = 0;
  
  onChange: any = () => { };
  onTouched: any = () => { };

  // countryList = [
  //   {
  //     name: 'AB',
  //     code: '+91 ',
  //     flag: 'data:image/png;base64, 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',
  //   },
  //   {
  //     name: 'CAB',
  //     code: '+11 ',
  //     flag: 'data:image/png;base64, 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',
  //   },
  //   {
  //     name: 'MC',
  //     code: '+82 ',
  //     flag: 'data:image/png;base64, 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',
  //   }
  // ]

  onSubmit() {
    console.log('why?')
    // console.log(this.Form.value['select-tag']);
    // console.log(this.countryCode);
    // this.finalAns();
  }

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // setDisabledState?(isDisabled: boolean): void {
  //   this.disabled = isDisabled;
  // }

  action() {
    this.onChange(this.countryCode + this.number);
  }

}
