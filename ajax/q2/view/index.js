$(()=>{
    const success = (value)=>{
        $("#answer").val(value);
    }
    const error = ()=>{
        $("#answer").val("error");
    }
    $("#form").submit(()=>{
        const data = JSON.stringify($("#answer").val());
        $.get("/8ball",{data:data}).done(response=>{
            success(response);
        }).fail(error);
    });
    return false;
});