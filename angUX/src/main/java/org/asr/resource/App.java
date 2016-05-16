package org.asr.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import static j2html.TagCreator.*;

/**
 * Hello world!
 *
 */
@Path("/")
public class App {
	@GET
	@Produces("text/html")
	public Response getLandingPage() {
		String output = body().with(h1("Products"),
				a("Fetch list of questionnaires").attr("href", "questionnaires")).render();
		return Response.status(200).entity(output).build();
	}
}
