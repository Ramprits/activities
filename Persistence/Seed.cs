using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{DisplayName = "Ramprit Sahani",UserName = "ramprit",Email="rampritsahani@gmail.com"}
                };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            if (context.Activities.Any()) return;
            var activities = new List<Activity>
            {
                new Activity{
                    Title= "Bread Crumbs - Japanese Style",
                    Date= DateTime.Now.AddMonths(2),
                    Description= "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
                    Category= "Business Development",
                    City= "Hangu",
                    Venue= "85447 Dovetail Park"
                },
                new Activity{
                    Title= "Lamb - Leg, Diced",
                    Date= DateTime.Now.AddMonths(2),
                    Description= "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
                    Category= "Business Development",
                    City= "Ovruch",
                    Venue= "812 Farragut Pass"
                }
            };
            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}