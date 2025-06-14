import React from 'react'

export default function Test() {
  return (
    <div>
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                                <h4 className="mb-sm-0">Forms Validation</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                                        <li className="breadcrumb-item active">Forms Validation</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
              

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Browser defaults</h4>
                                    <div className="flex-shrink-0">
                                        <div className="form-check form-switch form-switch-right form-switch-md">
                                            <label for="FormValidationDefault" className="form-label text-muted">Show Code</label>
                                            <input className="form-check-input code-switcher" type="checkbox" id="FormValidationDefault"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <p className="text-muted">Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.</p>

                                    <div className="live-preview">
                                        <form className="row g-3">
                                            <div className="col-md-4">
                                                <label for="validationDefault01" className="form-label">First name</label>
                                                <input type="text" className="form-control" id="validationDefault01" value="Mark" required/>
                                            </div>
                                            <div className="col-md-4">
                                                <label for="validationDefault02" className="form-label">Last name</label>
                                                <input type="text" className="form-control" id="validationDefault02" value="Otto" required/>
                                            </div>
                                            <div className="col-md-4">
                                                <label for="validationDefaultUsername" className="form-label">Username</label>
                                                <div className="input-group">
                                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                                    <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label for="validationDefault03" className="form-label">City</label>
                                                <input type="text" className="form-control" id="validationDefault03" required/>
                                            </div>
                                            <div className="col-md-3">
                                                <label for="validationDefault04" className="form-label">State</label>
                                                <select className="form-select" id="validationDefault04" required>
                                                    <option selected disabled value="">Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3">
                                                <label for="validationDefault05" className="form-label">Zip</label>
                                                <input type="text" className="form-control" id="validationDefault05" required/>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                                    <label className="form-check-label" for="invalidCheck2">
                                                        Agree to terms and conditions
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary" type="submit">Submit form</button>
                                            </div>
                                        </form>
                                    </div>


                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{height: "352px"}}>
<code>&lt;form className=&quot;row g-3&quot;&gt;
    &lt;div className=&quot;col-md-4&quot;&gt;
        &lt;label for=&quot;validationDefault01&quot; className=&quot;form-label&quot;&gt;First name&lt;/label&gt;
        &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationDefault01&quot; value=&quot;Mark&quot; required&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-4&quot;&gt;
        &lt;label for=&quot;validationDefault02&quot; className=&quot;form-label&quot;&gt;Last name&lt;/label&gt;
        &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationDefault02&quot; value=&quot;Otto&quot; required&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-4&quot;&gt;
        &lt;label for=&quot;validationDefaultUsername&quot; className=&quot;form-label&quot;&gt;Username&lt;/label&gt;
        &lt;div className=&quot;input-group&quot;&gt;
            &lt;span className=&quot;input-group-text&quot; id=&quot;inputGroupPrepend2&quot;&gt;@&lt;/span&gt;
            &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationDefaultUsername&quot; aria-describedby=&quot;inputGroupPrepend2&quot;
                required&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-6&quot;&gt;
        &lt;label for=&quot;validationDefault03&quot; className=&quot;form-label&quot;&gt;City&lt;/label&gt;
        &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationDefault03&quot; required&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-3&quot;&gt;
        &lt;label for=&quot;validationDefault04&quot; className=&quot;form-label&quot;&gt;State&lt;/label&gt;
        &lt;select className=&quot;form-select&quot; id=&quot;validationDefault04&quot; required&gt;
            &lt;option selected disabled value=&quot;&quot;&gt;Choose...&lt;/option&gt;
            &lt;option&gt;...&lt;/option&gt;
        &lt;/select&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-3&quot;&gt;
        &lt;label for=&quot;validationDefault05&quot; className=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
        &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationDefault05&quot; required&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-12&quot;&gt;
        &lt;div className=&quot;form-check&quot;&gt;
            &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;invalidCheck2&quot; required&gt;
            &lt;label className=&quot;form-check-label&quot; for=&quot;invalidCheck2&quot;&gt;
                Agree to terms and conditions
            &lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-12&quot;&gt;
        &lt;button className=&quot;btn btn-primary&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
    &lt;/div&gt;
&lt;/form&gt;</code></pre>
                                    </div>

                                </div>
                            </div>
                        </div> 
                    </div>
                    

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Custom Styles</h4>
                                    <div className="flex-shrink-0">
                                        <div className="form-check form-switch form-switch-right form-switch-md">
                                            <label for="FormVaidationCustom" className="form-label text-muted">Show Code</label>
                                            <input className="form-check-input code-switcher" type="checkbox" id="FormVaidationCustom"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <p className="text-muted">For custom Bootstrap form validation messages, you’ll need to add the <code>novalidate</code> boolean attribute to your <code>&lt;form&gt;</code>. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you’ll see the <code>:invalid</code> and <code>:valid</code> styles applied to your form controls.</p>

                                    <div className="live-preview">
                                        <form className="row g-3 needs-validation" novalidate>
                                            <div className="col-md-4">
                                                <label for="validationCustom01" className="form-label">First name</label>
                                                <input type="text" className="form-control is-valid" id="validationCustom01" value="Mark" required/>
                                                <div className="valid-feedback">
                                                    Looks good!
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <label for="validationCustom02" className="form-label">Last name</label>
                                                <input type="text" className="form-control" id="validationCustom02" value="Otto" required/>
                                                <div className="valid-feedback">
                                                    Looks good!
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <label for="validationCustomUsername" className="form-label">Username</label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                                                    <div className="invalid-feedback">
                                                        Please choose a username.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label for="validationCustom03" className="form-label">City</label>
                                                <input type="text" className="form-control" id="validationCustom03" required/>
                                                <div className="invalid-feedback">
                                                    Please provide a valid city.
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <label for="validationCustom04" className="form-label">State</label>
                                                <select className="form-select" id="validationCustom04" required>
                                                    <option selected disabled value="">Choose...</option>
                                                    <option>...</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a valid state.
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <label for="validationCustom05" className="form-label">Zip</label>
                                                <input type="text" className="form-control" id="validationCustom05" required/>
                                                <div className="invalid-feedback">
                                                    Please provide a valid zip.
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                                    <label className="form-check-label" for="invalidCheck">
                                                        Agree to terms and conditions
                                                    </label>
                                                    <div className="invalid-feedback">
                                                        You must agree before submitting.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary" type="submit">Submit form</button>
                                            </div>
                                        </form>
                                    </div>


                                    <div className="d-none code-view">
                                        <pre className="language-markup">
<code>&lt;form className=&quot;row g-3 needs-validation&quot; novalidate&gt;
    &lt;div className=&quot;col-md-4&quot;&gt;
        &lt;label for=&quot;validationCustom01&quot; className=&quot;form-label&quot;&gt;First name&lt;/label&gt;
        &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationCustom01&quot; value=&quot;Mark&quot; required&gt;
        &lt;div className=&quot;valid-feedback&quot;&gt;
            Looks good!
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-4&quot;&gt;
        &lt;label for=&quot;validationCustom02&quot; className=&quot;form-label&quot;&gt;Last name&lt;/label&gt;
        &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationCustom02&quot; value=&quot;Otto&quot; required&gt;
        &lt;div className=&quot;valid-feedback&quot;&gt;
            Looks good!
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-4&quot;&gt;
        &lt;label for=&quot;validationCustomUsername&quot; className=&quot;form-label&quot;&gt;Username&lt;/label&gt;
        &lt;div className=&quot;input-group has-validation&quot;&gt;
            &lt;span className=&quot;input-group-text&quot; id=&quot;inputGroupPrepend&quot;&gt;@&lt;/span&gt;
            &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationCustomUsername&quot; aria-describedby=&quot;inputGroupPrepend&quot;
                required&gt;
            &lt;div className=&quot;invalid-feedback&quot;&gt;
                Please choose a username.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-6&quot;&gt;
        &lt;label for=&quot;validationCustom03&quot; className=&quot;form-label&quot;&gt;City&lt;/label&gt;
        &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationCustom03&quot; required&gt;
        &lt;div className=&quot;invalid-feedback&quot;&gt;
            Please provide a valid city.
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-3&quot;&gt;
        &lt;label for=&quot;validationCustom04&quot; className=&quot;form-label&quot;&gt;State&lt;/label&gt;
        &lt;select className=&quot;form-select&quot; id=&quot;validationCustom04&quot; required&gt;
            &lt;option selected disabled value=&quot;&quot;&gt;Choose...&lt;/option&gt;
            &lt;option&gt;...&lt;/option&gt;
        &lt;/select&gt;
        &lt;div className=&quot;invalid-feedback&quot;&gt;
            Please select a valid state.
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-3&quot;&gt;
        &lt;label for=&quot;validationCustom05&quot; className=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
        &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationCustom05&quot; required&gt;
        &lt;div className=&quot;invalid-feedback&quot;&gt;
            Please provide a valid zip.
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-12&quot;&gt;
        &lt;div className=&quot;form-check&quot;&gt;
            &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;invalidCheck&quot; required&gt;
            &lt;label className=&quot;form-check-label&quot; for=&quot;invalidCheck&quot;&gt;
                Agree to terms and conditions
            &lt;/label&gt;
            &lt;div className=&quot;invalid-feedback&quot;&gt;
                You must agree before submitting.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-12&quot;&gt;
        &lt;button className=&quot;btn btn-primary&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
    &lt;/div&gt;
&lt;/form&gt;</code></pre>
                                    </div>

                                </div>
                            </div>
                        </div> 

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Supported Elements</h4>
                                        <div className="flex-shrink-0">
                                            <div className="form-check form-switch form-switch-right form-switch-md">
                                                <label for="FormVaidationSupported" className="form-label text-muted">Show Code</label>
                                                <input className="form-check-input code-switcher" type="checkbox" id="FormVaidationSupported"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <p className="text-muted">Block-level or inline-level form text can be created using <code>.form-text</code>.</p>

                                        <div className="live-preview">
                                            <form className="was-validated">
                                                <div className="mb-3">
                                                    <label for="validationTextarea" className="form-label">Textarea</label>
                                                    <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                                                    <div className="invalid-feedback">
                                                        Please enter a message in the textarea.
                                                    </div>
                                                </div>

                                                <div className="form-check mb-3">
                                                    <input type="checkbox" className="form-check-input" id="validationFormCheck1" required/>
                                                    <label className="form-check-label" for="validationFormCheck1">Check this checkbox</label>
                                                    <div className="invalid-feedback">Example invalid feedback text</div>
                                                </div>

                                                <div className="form-check">
                                                    <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required/>
                                                    <label className="form-check-label" for="validationFormCheck2">Toggle this radio</label>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required/>
                                                    <label className="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
                                                    <div className="invalid-feedback">More example invalid feedback text</div>
                                                </div>

                                                <div className="mb-3">
                                                    <select className="form-select" required aria-label="select example">
                                                        <option value="">Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <div className="invalid-feedback">Example invalid select feedback</div>
                                                </div>

                                                <div className="mb-3">
                                                    <input type="file" className="form-control" aria-label="file example" required/>
                                                    <div className="invalid-feedback">Example invalid form file feedback</div>
                                                </div>

                                                <div className="mb-0">
                                                    <button className="btn btn-primary" type="submit" disabled>Submit form</button>
                                                </div>
                                            </form>
                                        </div>


                                        <div className="d-none code-view">
                                            <pre className="language-markup" style={{height: "352px"}}>
    <code>&lt;form className=&quot;was-validated&quot;&gt;
        &lt;div className=&quot;mb-3&quot;&gt;
            &lt;label for=&quot;validationTextarea&quot; className=&quot;form-label&quot;&gt;Textarea&lt;/label&gt;
            &lt;textarea className=&quot;form-control&quot; id=&quot;validationTextarea&quot; placeholder=&quot;Required example textarea&quot;
                required&gt;&lt;/textarea&gt;
            &lt;div className=&quot;invalid-feedback&quot;&gt;
                Please enter a message in the textarea.
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div className=&quot;form-check mb-3&quot;&gt;
            &lt;input type=&quot;checkbox&quot; className=&quot;form-check-input&quot; id=&quot;validationFormCheck1&quot; required&gt;
            &lt;label className=&quot;form-check-label&quot; for=&quot;validationFormCheck1&quot;&gt;Check this checkbox&lt;/label&gt;
            &lt;div className=&quot;invalid-feedback&quot;&gt;Example invalid feedback text&lt;/div&gt;
        &lt;/div&gt;

        &lt;div className=&quot;form-check&quot;&gt;
            &lt;input type=&quot;radio&quot; className=&quot;form-check-input&quot; id=&quot;validationFormCheck2&quot; name=&quot;radio-stacked&quot; required&gt;
            &lt;label className=&quot;form-check-label&quot; for=&quot;validationFormCheck2&quot;&gt;Toggle this radio&lt;/label&gt;
        &lt;/div&gt;
        &lt;div className=&quot;form-check mb-3&quot;&gt;
            &lt;input type=&quot;radio&quot; className=&quot;form-check-input&quot; id=&quot;validationFormCheck3&quot; name=&quot;radio-stacked&quot; required&gt;
            &lt;label className=&quot;form-check-label&quot; for=&quot;validationFormCheck3&quot;&gt;Or toggle this other radio&lt;/label&gt;
            &lt;div className=&quot;invalid-feedback&quot;&gt;More example invalid feedback text&lt;/div&gt;
        &lt;/div&gt;

        &lt;div className=&quot;mb-3&quot;&gt;
            &lt;select className=&quot;form-select&quot; required aria-label=&quot;select example&quot;&gt;
                &lt;option value=&quot;&quot;&gt;Open this select menu&lt;/option&gt;
                &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
                &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
                &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
            &lt;/select&gt;
            &lt;div className=&quot;invalid-feedback&quot;&gt;Example invalid select feedback&lt;/div&gt;
        &lt;/div&gt;

        &lt;div className=&quot;mb-3&quot;&gt;
            &lt;input type=&quot;file&quot; className=&quot;form-control&quot; aria-label=&quot;file example&quot; required&gt;
            &lt;div className=&quot;invalid-feedback&quot;&gt;Example invalid form file feedback&lt;/div&gt;
        &lt;/div&gt;

        &lt;div className=&quot;mb-3&quot;&gt;
            &lt;button className=&quot;btn btn-primary&quot; type=&quot;submit&quot; disabled&gt;Submit form&lt;/button&gt;
        &lt;/div&gt;
    &lt;/form&gt;</code></pre>
                                        </div>

                                    </div>
                                </div>
                            </div> 
                        </div>
                        

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Tooltips</h4>
                                        <div className="flex-shrink-0">
                                            <div className="form-check form-switch form-switch-right form-switch-md">
                                                <label for="FormVaidationTooltip" className="form-label text-muted">Show Code</label>
                                                <input className="form-check-input code-switcher" type="checkbox" id="FormVaidationTooltip"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        {/* <p className="text-muted">If your form layout allows it, you can swap the <code>.{valid|invalid}-feedback</code> classes for <code>.{valid|invalid}-tooltip</code> classes to display validation feedback in a styled tooltip. Be sure to have a parent with <code>position: relative</code> on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.</p> */}

                                        <div className="live-preview">
                                            <form className="row g-3 needs-validation" novalidate>
                                                <div className="col-md-4 position-relative">
                                                    <label for="validationTooltip01" className="form-label">First name</label>
                                                    <input type="text" className="form-control is-valid" id="validationTooltip01" value="Mark" required/>
                                                    <div className="valid-tooltip">
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div className="col-md-4 position-relative">
                                                    <label for="validationTooltip02" className="form-label">Last name</label>
                                                    <input type="text" className="form-control" id="validationTooltip02" value="Otto" required/>
                                                    <div className="valid-tooltip">
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div className="col-md-4 position-relative">
                                                    <label for="validationTooltipUsername" className="form-label">Username</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                        <input type="text" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required/>
                                                        <div className="invalid-tooltip">
                                                            Please choose a unique and valid username.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 position-relative">
                                                    <label for="validationTooltip03" className="form-label">City</label>
                                                    <input type="text" className="form-control" id="validationTooltip03" required/>
                                                    <div className="invalid-tooltip">
                                                        Please provide a valid city.
                                                    </div>
                                                </div>
                                                <div className="col-md-3 position-relative">
                                                    <label for="validationTooltip04" className="form-label">State</label>
                                                    <select className="form-select" id="validationTooltip04" required>
                                                        <option selected disabled value="">Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                    <div className="invalid-tooltip">
                                                        Please select a valid state.
                                                    </div>
                                                </div>
                                                <div className="col-md-3 position-relative">
                                                    <label for="validationTooltip05" className="form-label">Zip</label>
                                                    <input type="text" className="form-control" id="validationTooltip05" required/>
                                                    <div className="invalid-tooltip">
                                                        Please provide a valid zip.
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="d-none code-view">
                                            <pre className="language-markup">
    <code>&lt;form className=&quot;row g-3 needs-validation&quot; novalidate&gt;
        &lt;div className=&quot;col-md-4 position-relative&quot;&gt;
            &lt;label for=&quot;validationTooltip01&quot; className=&quot;form-label&quot;&gt;First name&lt;/label&gt;
            &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationTooltip01&quot; value=&quot;Mark&quot; required&gt;
            &lt;div className=&quot;valid-tooltip&quot;&gt;
                Looks good!
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className=&quot;col-md-4 position-relative&quot;&gt;
            &lt;label for=&quot;validationTooltip02&quot; className=&quot;form-label&quot;&gt;Last name&lt;/label&gt;
            &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationTooltip02&quot; value=&quot;Otto&quot; required&gt;
            &lt;div className=&quot;valid-tooltip&quot;&gt;
                Looks good!
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className=&quot;col-md-4 position-relative&quot;&gt;
            &lt;label for=&quot;validationTooltipUsername&quot; className=&quot;form-label&quot;&gt;Username&lt;/label&gt;
            &lt;div className=&quot;input-group has-validation&quot;&gt;
                &lt;span className=&quot;input-group-text&quot; id=&quot;validationTooltipUsernamePrepend&quot;&gt;@&lt;/span&gt;
                &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationTooltipUsername&quot;
                    aria-describedby=&quot;validationTooltipUsernamePrepend&quot; required&gt;
                &lt;div className=&quot;invalid-tooltip&quot;&gt;
                    Please choose a unique and valid username.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className=&quot;col-md-6 position-relative&quot;&gt;
            &lt;label for=&quot;validationTooltip03&quot; className=&quot;form-label&quot;&gt;City&lt;/label&gt;
            &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationTooltip03&quot; required&gt;
            &lt;div className=&quot;invalid-tooltip&quot;&gt;
                Please provide a valid city.
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className=&quot;col-md-3 position-relative&quot;&gt;
            &lt;label for=&quot;validationTooltip04&quot; className=&quot;form-label&quot;&gt;State&lt;/label&gt;
            &lt;select className=&quot;form-select&quot; id=&quot;validationTooltip04&quot; required&gt;
                &lt;option selected disabled value=&quot;&quot;&gt;Choose...&lt;/option&gt;
                &lt;option&gt;...&lt;/option&gt;
            &lt;/select&gt;
            &lt;div className=&quot;invalid-tooltip&quot;&gt;
                Please select a valid state.
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className=&quot;col-md-3 position-relative&quot;&gt;
            &lt;label for=&quot;validationTooltip05&quot; className=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
            &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;validationTooltip05&quot; required&gt;
            &lt;div className=&quot;invalid-tooltip&quot;&gt;
                Please provide a valid zip.
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className=&quot;col-12&quot;&gt;
            &lt;button className=&quot;btn btn-primary&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
        &lt;/div&gt;
    &lt;/form&gt;</code></pre>
                                        </div>

                                    </div>
                                </div>
                            </div> 

                        </div>
                        

                    </div>


    </div>
  )
}
