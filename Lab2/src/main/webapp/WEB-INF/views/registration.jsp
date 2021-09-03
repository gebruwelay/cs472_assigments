<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML>
<html>
<head>
    <title>Registration Form</title>
    <link rel="stylesheet" type="text/css" href="<c:url value="/css/style.css"/>">
</head>
<body>

<div id="global">
    <form:form modelAttribute="student" action="registration" method="post">
        <fieldset>
            <legend>Add a student</legend>
            <p>
                <form:errors path="*" cssStyle="color : red;" />
            </p>
            <p>
                <label for="id">ID: </label>
                    <form:input path="id" id="id" />
            <div style="text-align: center;">
                <form:errors path="id" cssStyle="color : red;" />
            </div>
            </p>
            <p>
                <label for="firstName">First Name: </label>
                    <form:input path="firstName" />
            <div style="text-align: center;">
                <form:errors path="firstName" cssStyle="color : red;" />
            </div>
            </p>
            <p>
                <label for="lastName">Last Name: </label>
                    <form:input path="lastName" />
            <div style="text-align: center;">
                <form:errors path="lastName" cssStyle="color : red;" />
            </div>
            </p>

            <p>
                <label for="birthday">Date Of Birth: </label>
                <form:input path="birthday" id="birthday" />
                <form:errors path="birthday" cssStyle="color : red;" />
            </p>

            <p>
                <label for="email">email: </label>
                <form:input path="email" id="email" />
                <form:errors path="email" cssStyle="color : red;" />
            </p>

            <p>
                <label for="gender">gender: </label>
                <form:input path="gender" id="gender" />
                <form:errors path="gender" cssStyle="color : red;" />
            </p>

            <h4>Phone:</h4>
            <p>
                <label for="area">area: </label>
                    <form:input path="phone.area" id="area" />
            <div style="text-align: center;">
                <form:errors path="phone.area" cssStyle="color : red;" />
            </div>
            </p>

            <p>
                <label for="prefix">prefix: </label>
                    <form:input path="phone.prefix" id="prefix" />
            <div style="text-align: center;">
                <form:errors path="phone.prefix" cssStyle="color : red;" />
            </div>
            </p>

            <p>
                <label for="number">number: </label>
                    <form:input path="phone.number" id="number" />
            <div style="text-align: center;">
                <form:errors path="phone.number" cssStyle="color : red;" />
            </div>
            </p>

            <p id="buttons">
                <input id="reset" type="reset" tabindex="4">
                <input id="submit" type="submit" tabindex="5" value="Add Employee">
            </p>
        </fieldset>
    </form:form>
</div>
</body>
</html>
