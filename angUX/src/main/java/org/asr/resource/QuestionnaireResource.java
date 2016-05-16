package org.asr.resource;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.OPTIONS;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;

import org.asr.core.Hypermedia;
import org.asr.entity.Question;
import org.asr.entity.QuestionSet;
import org.asr.entity.Questionnaire;

@Path(value = "/questionnaires")
public class QuestionnaireResource extends Hypermedia {

	@OPTIONS	
	public Response getOptions() {
		return Response.ok().header("Access-Control-Allow-Origin", "http://localhost:3000")
				.header("Access-Control-Allow-Methods", "POST, GET, PUT, UPDATE, OPTIONS")
				.header("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With").build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Questionnaire> fetchListOfQuestionnaire() {
		List<Questionnaire> l = new ArrayList<Questionnaire>();

		l.add(createAQuestionnaire(101, "Topic 1"));
		l.add(createAQuestionnaire(102, "Topic 2"));
		return l;
	}

	private Questionnaire createAQuestionnaire(int id, String topic) {
		Questionnaire q = new Questionnaire();
		q.setTopic(topic);
		q.setId(id);
		q.setSections(new ArrayList<QuestionSet>());
		
		QuestionSet qSet = new QuestionSet();
		ArrayList<Question> l = new ArrayList<Question>();
		l.add(new Question(1, "What is your name ?", 1));
		l.add(new Question(2, "What is your age ?", 1));
		qSet.setList(l);	
		
		q.getSections().add(qSet);
		
		qSet = new QuestionSet();
		l = new ArrayList<Question>();
		l.add(new Question(1, "What is your father's name ?", 1));
		l.add(new Question(2, "What is your nationality ?", 1));
		qSet.setList(l);
		q.getSections().add(qSet);
		
		return q;
	}

	@GET
	@Path(value = "/{questionnaireId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Questionnaire fetchQuestionnaire(@PathParam("questionnaireId") String id) {
		return createAQuestionnaire(1, null);
	}

	@PUT
	@Path("/add")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response addQuestionnaire(Questionnaire newQuestionnaire) {
		try {

			return Response.created(UriBuilder.fromResource(QuestionnaireResource.class).build(newQuestionnaire))
					.build();
		} catch (Exception e) {
			e.printStackTrace();
			return Response.status(Status.INTERNAL_SERVER_ERROR).build();
		}
	}

	@DELETE
	@Path("/{questionnaireId}/delete")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response removeQuestionnaire(@PathParam("questionnaireId") String id) {
		try {

			return Response.noContent().build();
		} catch (Exception e) {
			e.printStackTrace();
			return Response.status(Status.INTERNAL_SERVER_ERROR).build();
		}
	}

	@POST
	@Path("/{questionnaireId}/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response editTopic(@PathParam("questionnaireId") String id, Questionnaire newQuestionnaire) {
		try {

			return Response.created(UriBuilder.fromResource(QuestionnaireResource.class).build(newQuestionnaire))
					.build();
		} catch (Exception e) {
			e.printStackTrace();
			return Response.status(Status.INTERNAL_SERVER_ERROR).build();
		}
	}
}
