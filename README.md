# Drag and Drop

## Main Focus:
<p> This fireside primarily focuses on introducing and explaining the functionality and syntax behind drag and drop for vue. </p>

<ul>
<li> For this fireside you will start with all pieces you need minus the actual drag and drop keywords, the AppState is filled with items that you can move between rooms. 
<br>
<li> key terms to know:
<br>
</ul>
<table style="width:100%">
  <tr>
    <th>Term</th>
    <th>Description</th>
    <th>Where It Belongs</th>
  </tr>
  <tr>
    <td>dropzone="name"</td>
    <td>A place where the draggable items can be dropped</td>
    <td>Parent Element</td>
  </tr>
  <tr>
    <td>draggable="true"</td>
    <td>Allows whatever element it's on to be draggable</td>
    <td>Child Element</td>
  </tr>
  <tr>
    <td>@drop.prevent="function"</td>
    <td>triggers the drop event and runs the corresponding function</td>
    <td>Parent Element</td>
  </tr>
   <tr>
    <td>@dragover.prevent</td>
    <td>Prevents anything from happening when an item is dragged to this parent element without being dropped</td>
    <td>Parent Element</td>
  </tr>
   <tr>
    <td>@dragstart="function"</td>
    <td>runs a function as soon as the item is being dragged</td>
    <td>Child Element</td>
  </tr>
  
</table>