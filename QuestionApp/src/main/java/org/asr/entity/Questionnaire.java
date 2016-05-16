package org.asr.entity;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Questionnaire {
	private int id;
	private ArrayList<QuestionSet> sections;
	private String topic;
	public ArrayList<QuestionSet> getSections() {
		return sections;
	}
	public void setSections(ArrayList<QuestionSet> list) {
		this.sections = list;
	}
	public String getTopic() {
		return topic;
	}
	public void setTopic(String topic) {
		this.topic = topic;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
}
