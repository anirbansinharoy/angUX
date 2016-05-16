package org.asr.entity;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class QuestionSet {
	private int id;
	private ArrayList<Question> list;

	public ArrayList<Question> getList() {
		return list;
	}

	public void setList(ArrayList<Question> list) {
		this.list = list;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
