/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";

import powerbi from "powerbi-visuals-api";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import * as reactDom from "react-dom";
import * as d3 from "d3";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import { VisualFormattingSettingsModel } from "./settings";
import { createElement } from "react";
import { update } from "./Components/useApp";
import App from "./Components/App";

export class Visual implements IVisual {
  private target: HTMLElement;
  private updateCount: number;
  private textNode: Text;
  private formattingSettings: VisualFormattingSettingsModel;
  private formattingSettingsService: FormattingSettingsService;

  constructor(options: VisualConstructorOptions) {
    reactDom.render(createElement(App), options.element);
    console.log("COnstructor calls!");
    // this.target = options.element;
  }

  public update(options: VisualUpdateOptions) {
    // this.formattingSettings =
    //   this.formattingSettingsService.populateFormattingSettingsModel(
    //     VisualFormattingSettingsModel,
    //     options.dataViews[0]
    //   );
    // console.log("options", options);
    // const categorical = options.dataViews[0].categorical;
    // const genderColumn = {
    //   displayName: categorical.categories[0].source.displayName,
    //   values: categorical.categories[0].values,
    // };
    // const emailColumn = {
    //   displayName: categorical.values[0].source.displayName,
    //   values: categorical.values[0].values,
    // };
    update(options.dataViews);
    // reactDom.render(<App />, this.target);

    // console.log("Visual update", options);
    // if (this.textNode) {
    //   this.textNode.textContent = (this.updateCount++).toString();
    // }
  }

  /**
   * Returns properties pane formatting model content hierarchies, properties and latest formatting values, Then populate properties pane.
   * This method is called once every time we open properties pane or when the user edit any format property.
   */
  public getFormattingModel(): powerbi.visuals.FormattingModel {
    return this.formattingSettingsService.buildFormattingModel(
      this.formattingSettings
    );
  }
}
