<Query Kind="Statements">
  <Connection>
    <ID>56a439b1-5330-47fd-bad9-b49dd1dbb15a</ID>
    <Persist>true</Persist>
    <Server>(localdb)\MSSQLLocalDB</Server>
    <Database>Track.mdf</Database>
    <ShowServer>true</ShowServer>
  </Connection>
</Query>

var graphData = RaceResults.Where(a => a.AthleteID == 22 && a.Event.EventID == 2)
							.Select(a => new {a.MeetDate, a.FinishTime})
							.ToList();

graphData.Dump();

// EventID 2 is the 1500