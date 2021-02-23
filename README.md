# spring-sum-up

## Installation

`npm install --save react-animated-text`

## Documentation

<a href="">
        <p style="color: green">See Live Examples on CodeSandbox</p>
</a>

<p>
spring-sum-up allows you to add a magnifying glass effect on an image, or short sentences, to a page. So, you can install this package you will have a div in which you determine all the necessary parameters to have an image in the backgroung.
</p>
<p> 
CSS and implemented with React Spring to animate magnifying divs. It also allows to determine the size of the container div and the size of the magnifying divs.
Here's the most basic way to add the package to your page:
</p>

```
import React from 'react';
import { SpringSumUp } from 'spring-sum-up';

    	<SpringSumUp
    			backgroundImage="url(https://static.toiimg.com/photo/72975551.cms)"
    			widthContent="50%"
    			height="100vh"
    			width="100%"
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
            <td> - </td>
        </tr>
         <tr>
            <td>padding</td>
            <td>string</td>
           <td>0</td>
            <td>No</td>
            <td> - </td>
        </tr>
         <tr>
            <td>backgroundRepeat</td>
            <td>string</td>
           <td>no-repeat</td>
            <td>No</td>
            <td> - </td>
        </tr>
        <tr>
            <td>backgroundSize</td>
            <td>string</td>
           <td>cover</td>
            <td>No</td>
            <td> - </td>
        </tr>
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
            <th>The magnifying div</th>
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
            <td>-</td>
        </tr>
         <tr>
            <td>backgroundPositionContent</td>
            <td>string</td>
            <td>0%</td>
            <td>No</td>
            <td>-</td>
        </tr>
          <tr>
            <td> backgroundSizeContent</td>
            <td>string</td>
            <td>120% 120%</td>
            <td>No</td>
            <td>-</td>
        </tr>
    </tbody>

</table>
