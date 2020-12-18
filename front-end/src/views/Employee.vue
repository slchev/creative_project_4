<template>
<div class="employee">
<h2> This is where mom will be able to see the appointments that have been booked and accept/reject them</h2>
<ul>This is where mom will see appointments
<li>item1<button type="accept" @click="accept">Accept</button><button type="decline" @click="decline">Decline</button></li>
<li>item2<button type="accept" @click="accept">Accept</button><button type="decline" @click="decline">Decline</button></li>
<li>item3<button type="accept" @click="accept">Accept</button><button type="decline" @click="decline">Decline</button></li>
<li>item4<button type="accept" @click="accept">Accept</button><button type="decline" @click="decline">Decline</button></li>
<li>item5<button type="accept" @click="accept">Accept</button><button type="decline" @click="decline">Decline</button></li>
</ul>
<br>
<br>
<ul> This is where mom will see the appointments she's accepted
<li>write a v-for loop that cycles through everything in the calendar</li>

</ul>

then make everything look pretty.

</div>
</template>
