var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", async () =>
{
    //await between [0,4.9] seconds
    var delay = Random.Shared.Next(50) * 100;
    await Task.Delay(delay).ConfigureAwait(false);
    if (delay > 4500)
        throw new ApplicationException("We couldn't process that request at the expected time");

    return "Hello World!";
});

app.Run();
