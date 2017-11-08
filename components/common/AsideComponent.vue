<template>
    <aside>
        <div class="info">
            <p>
                Quisque lorem quam, vulputate ac accumsan sit amet, hendrerit in nisi. Maecenas molestie enim turpis, sed eleifend velit efficitur quis. In suscipit ac dolor vel ultricies. Integer nibh odio, tincidunt a odio at, congue posuere urna. In hac habitasse platea dictumst. Phasellus pretium venenatis ipsum. Praesent a lacinia lorem, ut porta diam. 
            </p>
        </div>
        <div class="info">
            <p>
                Quisque lorem quam, vulputate ac accumsan sit amet, hendrerit in nisi. Maecenas molestie enim turpis, sed eleifend velit efficitur quis. In suscipit ac dolor vel ultricies. Integer nibh odio, tincidunt a odio at, congue posuere urna. In hac habitasse platea dictumst. Phasellus pretium venenatis ipsum. Praesent a lacinia lorem, ut porta diam. 
            </p>
        </div>
    </aside> 
</template>

<script>
</script>

<style lang="scss" scoped>

aside  {
	flex: 20%;
	display: flex;    
	flex-direction: column; 
	margin-left: 1em;
}

.info {   
	background-color: #ccc;
	border-radius: 8px;
	margin-bottom: 1em;
	padding: 1em;     
}

@media screen and (max-width: 800px) {
aside {
		display: none;
	}
}

</style>
