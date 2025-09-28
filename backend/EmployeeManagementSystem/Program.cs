
using EmployeeManagementSystem.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Add CORS policy to allow the Angular dev server during development
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowAngularDev",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure DbContext with MSSQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// In development we prefer not to force HTTPS redirects because the dev certificate
// may not be configured in every environment and it can cause the browser to
// attempt HTTPS where no TLS listener is available (which leads to connection refused).
// Only enable HTTPS redirection outside Development.
if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

// Enable CORS for Angular dev server in Development
if (app.Environment.IsDevelopment())
{
    app.UseCors("AllowAngularDev");
}

app.UseAuthorization();

app.MapControllers();

app.Run();
