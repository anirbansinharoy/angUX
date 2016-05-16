package org.asr.app.resource;

import java.util.ArrayList;
import java.util.List;

import org.asr.entity.Question;
import org.asr.entity.QuestionSet;
import org.asr.entity.Questionnaire;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/questionnaires")
public class QuestionnaireResource  {

	@RequestMapping(method = RequestMethod.OPTIONS)
	public ResponseEntity getOptions() {
		return ResponseEntity.ok().header("Access-Control-Allow-Origin", "http://localhost:3000")
				.header("Access-Control-Allow-Methods", "POST, GET, PUT, UPDATE,OPTIONS")
				.header("Access-Control-Allow-Headers", "Content-Type, Accept,X-Requested-With").build();
	}
	 @CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(method = RequestMethod.GET,  produces = "application/json")
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

	@RequestMapping(method = RequestMethod.GET, value = "/{questionnaireId}", produces = "application/json")
	public Questionnaire fetchQuestionnaire(@RequestParam("questionnaireId") String id) {
		return createAQuestionnaire(1, null);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/add", produces = "application/json", consumes = "application/json")
	public ResponseEntity addQuestionnaire(Questionnaire newQuestionnaire) {
		try {

			return ResponseEntity.ok().build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/add", produces = "application/json", consumes = "application/json")
	public ResponseEntity removeQuestionnaire(@javax.websocket.server.PathParam("questionnaireId") String id) {
		try {

			return ResponseEntity.noContent().build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "/add", produces = "application/json", consumes = "application/json")
	public ResponseEntity editTopic(@RequestParam("questionnaireId") String id, Questionnaire newQuestionnaire) {
		try {

			return ResponseEntity.ok().build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}
