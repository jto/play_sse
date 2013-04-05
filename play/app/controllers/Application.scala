package controllers

import play.api.mvc._
import play.api.libs.EventSource
import play.api.libs.iteratee._

object Application extends Controller {

  val events = Enumerator.repeat("0")

  def index = Action {
    Ok.stream((events &> Enumeratee.take(1000000) &> EventSource()) >>> Enumerator.eof)
  }

}