using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
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