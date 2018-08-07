<#import "parts/common.ftl" as c>
<#import "parts/login.ftl" as l>
<@c.page>
    <@l.logout />

<div><a href="/"> Main page</a></div>
<div>
    <form method="post">
        <input type="text" name="name" placeholder="Enter name">
        <input type="text" name="inn" placeholder="Enter inn">
        <input type="hidden" name="_csrf" value="${_csrf.token}" />
        <button type="submit">Add customer</button>

    </form>
    <#--<form method="get" action="/customers">-->
        <#--<input type="text" name="filter" value="${filter}">-->
        <#--<button type="submit">Find</button>-->
    <#--</form>-->
</div>


<div>List of customers</div>
<#list customers as customer>
    <div>
        <b>${customer.id}</b>
        <span>${customer.name}</span>
        <span>${customer.inn}</span>
    </div>
</#list>

</@c.page>