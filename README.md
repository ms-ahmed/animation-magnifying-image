# spring-sum-up

## Installation

`npm install --save magnifying-div-animation`

## Documentation

<a href="https://codesandbox.io/s/young-darkness-3iq93?file=/package.json">
        <p style="color: green">See Live Examples on CodeSandbox</p>
</a>
<br/>
<p>
"magnifying-div-animation" allows you to add a magnifying glass effect on an image. When you install this package, you install a container div that have a customizable background (for more details look at the parameters) and magnifying divs inside that listens to the the mouse movement inside the container div.
</p>
<br/>
<p> This package was built with react spring.</p>
<br/>
<p>Here's the most basic way to add the package to your page:</p>
<br/>
```
import Magnify from 'magnifying-div-animation';

    <Mag
    	backgroundImage="url(https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg)"
    	widthContent="20%"
    	height="300px"
    	width="100%"
    	padding="15px"
    />

```

<p>
Just import the component you want to use and then use it somewhere.
All adjustable parameters are defined by default,(but of course you can modify them) the size of the container div, the size of the divs with the magnifying glass effect, the number of magnifying divs, parameters related to the background image such as background-size, background-repeat, background-color, background-position.
<p>The container div refers to the div that contains the magnifying divs.The magnifying div refers to the all the divs that you create inside the container div.</p>
<p>You can see below all the parameters you can change:</p>

<table>
    <thead>
        <tr>
            <th></th>
            <th></th>
            <th>The container div</th>
            <th></th>
            <th></th>
        </tr>
        <tr>
            <th>propName</th>
            <th>propType</th>
            <th>defaultValue</th>
            <th>isRequired</th>
            <th>Explanation</th>
        </tr>
    </thead>
    <tbody>
      <tr>
            <td>height</td>
            <td>string</td>
             <td>
            '700px'
            </td>
            <td>Yes</td>
            <td>The parameter allows to set the height of the container div. You should use only values in px, or viewport, but not in %.</td>
        </tr>
        <tr>
            <td>width</td>
            <td>string</td>
            <td>
            '100%'
            </td>
            <td>Yes</td>
            <td>The parameter allows to set the width of the container div. You should use values in px, or viewport, and %.</td>
        </tr>
        <tr>
            <td>backgroundImage</td>
            <td>string</td>
           <a href="https://www.partir.com/
            images/incontournables/japon-hakone
            -fuji.jpg"> <td>
            url(https://www.partir.com/
            images/incontournables/japon-hakone
            -fuji.jpg)
            </td>
          </a>
            <td>Yes</td>
            <td>This url is used for the maginifying divs.</td>
        </tr>
         <tr>
            <td>padding</td>
            <td>string</td>
           <td>0</td>
            <td>No</td>
            <td> - </td>
        </tr>
         <tr>
            <td>Opacity</td>
            <td>string</td>
           <td>".8"</td>
            <td>No</td>
            <td> - </td>
        </tr>
         <tr>
            <td>backgroundRepeat</td>
            <td>string</td>
           <td>"no-repeat"</td>
            <td>No</td>
            <td> If you change this parameter it won't affect the magnifying div. </td>
        </tr>
        <tr>
            <td>backgroundSize</td>
            <td>string</td>
           <td>"cover"</td>
            <td>No</td>
            <td> If you change this parameter it won't affect the magnifying div. </td>
        </tr>
          <tr>
            <td>backgroundColor</td>
            <td>string</td>
           <td>"#fff"</td>
            <td>No</td>
            <td> - </td>
        </tr>
          <tr>
            <td>opacity</td>
            <td>string</td>
             <td>
            '0.8'
            </td>
            <td>Yes</td>
            <td> - </td>
        </tr>
        <tr>
            <th></th>
            <th></th>
            <th>The magnifying div (is listening the mouse move event) </th>
            <th></th>
            <th></th>
        </tr>
        <tr>
            <td>magnifyingDiv</td>
            <td>string</td>
            <td>4</td>
            <td>Yes</td>
            <td>This parameter defines the numbers of magnifying divs. Example : magnifyingDiv={1}</td>
        </tr>
         <tr>
            <td>backgroundAttachmentContent</td>
            <td>string</td>
            <td>fixed</td>
            <td>Yes</td>
            <td> If you change this parameter it won't affect the container div. </td>
        </tr>
         <tr>
            <td>backgroundPositionContent</td>
            <td>string</td>
            <td>0%</td>
            <td>No</td>
            <td> If you change this parameter it won't affect the container div.</td>
        </tr>
          <tr>
            <td> backgroundSizeContent</td>
            <td>string</td>
            <td>1"20% 120%"</td>
            <td>Yes</td>
            <td> If you change this parameter it won't affect the container div. It is required otherwise you won't get the magnifying div.</td>
        </tr>
    </tbody>

</table>
```
