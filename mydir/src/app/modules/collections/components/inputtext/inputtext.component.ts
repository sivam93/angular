import { Component, OnInit, EventEmitter, Output, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

interface validation{
  required:boolean;
  message:string;
}

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputtextComponent),
      multi: true
  }]
})
export class InputtextComponent implements OnInit {
  @Input("label") label:string = '';
  @Input("type") type:string = '';
  @Input("validation") validation:validation = {
    required:false,
    message:""
  };
  @Input() inputValue: any = '';
  @Input('disabled') disabled: boolean = false;
  @Input('selectValues') selectValues:any[] = [];
  @Output() inputValueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /**
     * Holds the current value of the slider
     */
    // value: number = 0;

    // /**
    //  * Invoked when the model has been changed
    //  */
    onChange: (_: any) => void = (_: any) => {};

    // /**
    //  * Invoked when the model has been touched
    //  */
    onTouched: () => void = () => {};


    // /**
    //  * Method that is invoked on an update of a model.
    //  */
    updateChanges() {
        this.onChange(this.inputValue);
    }

    // ///////////////
    // // OVERRIDES //
    // ///////////////

    // /**
    //  * Writes a new item to the element.
    //  * @param value the value
    //  */
    writeValue(value: number): void {
        this.inputValue = value;
        this.updateChanges();
    }

    /**
     * Registers a callback function that should be called when the control's value changes in the UI.
     * @param fn
     */
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    /**
     * Registers a callback function that should be called when the control receives a blur event.
     * @param fn
     */
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

}
