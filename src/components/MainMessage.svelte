<script>

	import { AccountInfo, brideName, groomName, mainMsg1, mainMsg2, mainMsg3, mainMsg4, mainMsg5, mainMsg6, mainMsg7, mainMsg8 } from "../resource/input";

</script>
<h1 class="mb-8 text-3xl md:text-3xl font-bold text-center text-stone-600">모시는 말씀</h1>
<div class="container mx-auto relative">
	<img src="/image/message_image.jpg" alt="" class="w-full h-auto" />
	<div class="absolute inset-0 flex items-center justify-center rounded-lg">
		<div class="w-full mx-auto text-center">
			<p class="leading-relaxed text-l">
				{mainMsg1}<br />
				{mainMsg2}<br />
				{mainMsg3}<br />
				{mainMsg4}<br />
				{mainMsg5}<br />
				{mainMsg6}<br />
			</p>
			<p class="leading-relaxed text-l py-3">
				{mainMsg7}<br />
				{mainMsg8}<br />
			</p>
		</div>
	</div>
</div>
<div class="text-center mx-auto">
	<div class="w-full mx-auto px-5 py-5">
		<p class="tracking-wider text-xl text-center font-bold">
			{AccountInfo.groomFatherName} • {AccountInfo.groomMotherName}<span class="text-sm text-gray-500"> 의 {AccountInfo.groomOrder}</span> {groomName} 
		</p>
		<p class="tracking-wider text-xl text-center font-bold">
			{AccountInfo.brideFatherName} • {AccountInfo.brideMotherName}<span class="text-sm text-gray-500"> 의 {AccountInfo.brideOrder}</span> {brideName} 
		</p>
	</div>
</div>
